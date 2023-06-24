"use client";

import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useState,
} from "react";

type MenuContextProps = {
	isMenuOpen: boolean;
	toggleMenu: () => void;
};

export const MenuContext = createContext<MenuContextProps>(
	{} as MenuContextProps
);

export function MenuProvider({ children }: { children: React.ReactNode }) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const handleToggleMenu = useCallback(() => {
		setIsMenuOpen((prev) => !prev);
	}, []);

	useEffect(() => {
		const addOverflowHiddenInWindow = () => {
			if (isMenuOpen) document.documentElement.classList.add("overflow-hidden");
			else document.documentElement.classList?.remove("overflow-hidden");
		};

		addOverflowHiddenInWindow();

		const onResize = () => {
			if (window.matchMedia("(min-width: 1024px)").matches && isMenuOpen) {
				setIsMenuOpen(false);
			}
		};

		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [isMenuOpen]);

	return (
		<MenuContext.Provider
			value={{
				isMenuOpen: isMenuOpen,
				toggleMenu: handleToggleMenu,
			}}
		>
			{children}
		</MenuContext.Provider>
	);
}

export const useMenu = () => useContext(MenuContext);
