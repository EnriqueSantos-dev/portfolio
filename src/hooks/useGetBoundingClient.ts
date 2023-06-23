"use client";

import { RefObject, useCallback, useEffect, useState } from "react";

const useGetBoundingClient = <T extends HTMLElement>(ref: RefObject<T>) => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

	const handleMouseMove = useCallback((ev: any): any => {
		if (!ref.current) return;
		const { left, top } = ref.current.getBoundingClientRect();
		const x = ev.clientX - left;
		const y = ev.clientY - top;
		setMousePosition({ x, y });
	}, []);

	useEffect(() => {
		const element = ref.current;

		if (!element) return;
		element.addEventListener("mousemove", handleMouseMove);

		return () => {
			element.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return mousePosition;
};

export default useGetBoundingClient;
