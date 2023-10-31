"use client";

import { useRef, useState } from "react";

import Image from "next/image";

import { AnimatePresence, motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

import { Button, Input, TextArea } from "@/components/ui";

import { cn } from "@/utils/cn";
import { Dictionary } from "@/utils/mappers-i18n";

import NavIcon from "@/assets/nav-contact.svg";

type ContactProps = {
	sectionId: string;
	dictionary: Dictionary["Contact"];
};

export function Contact({ sectionId, dictionary }: ContactProps) {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const divRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(divRef);

	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);
		const name = formData.get("name");
		const message = formData.get("message");

		setIsSubmitting(true);
		const promise = fetch("/api/mails/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({ name, message }),
		}).finally(() => {
			setIsSubmitting(false);
		});

		toast.promise(promise, {
			success: "Obrigado por me enviar uma mensagem 😃",
			error:
				"Parece que ocorreu algum erro ao enviar a mensagem 🫤. Tente novamente",
			loading: "Enviando a mensagem",
		});
	};

	return (
		<section id={sectionId} className="space-y-16" ref={divRef}>
			<h2 className="gradient-highlight block text-center text-3xl font-bold md:text-4xl">
				{dictionary.heading}
			</h2>

			<AnimatePresence>
				{inView && (
					<div className="grid grid-cols-1 place-content-center gap-y-12 lg:grid-cols-2 lg:gap-y-0">
						<motion.div
							initial={{ x: -50, opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							exit={{ x: -50, opacity: 0 }}
							transition={{ duration: 0.3 }}
							className="flex flex-col gap-8"
						>
							<h3 className="text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100 md:text-3xl/10 lg:text-start">
								{dictionary.subheading}
							</h3>

							<form onSubmit={handleSubmit} className="flex flex-col gap-4">
								<fieldset className="flex flex-col gap-2">
									<label
										htmlFor="name"
										className="font-medium capitalize text-neutral-900 dark:text-neutral-100"
									>
										{dictionary.form.name}
									</label>
									<Input
										id="name"
										name="name"
										placeholder={dictionary.form.namePlaceholder}
										required
										min={5}
										max={30}
									/>
								</fieldset>

								<fieldset className="flex flex-col gap-2">
									<label
										htmlFor="message"
										className="font-medium capitalize text-neutral-900 dark:text-neutral-100"
									>
										{dictionary.form.message}
									</label>

									<TextArea
										id="message"
										name="message"
										placeholder={dictionary.form.messagePlaceholder}
										className="h-32"
										required
										min={10}
										max={500}
									/>
								</fieldset>

								<Button
									variant="neutral"
									type="submit"
									size="lg"
									className={cn("mx-auto mt-4 text-xs uppercase lg:w-2/4", {
										"pointer-events-none": isSubmitting,
									})}
									aria-disabled={isSubmitting}
								>
									{isSubmitting ? (
										<div className="relative flex justify-center gap-1">
											<span className="h-2 w-2 animate-pulse rounded-full bg-neutral-700 dark:bg-neutral-500" />
											<span className="h-2 w-2 animate-pulse rounded-full bg-neutral-700 dark:bg-neutral-500" />
											<span className="h-2 w-2 animate-pulse rounded-full bg-neutral-700 dark:bg-neutral-500" />
											<span className="sr-only">Loading</span>
										</div>
									) : (
										<>
											{dictionary.form.submit}
											<Send size={20} />
										</>
									)}
								</Button>
							</form>
						</motion.div>

						<motion.div
							initial={{ x: 50, scale: 0.8, opacity: 0 }}
							animate={{ x: 0, scale: 1, opacity: 1 }}
							transition={{ duration: 0.3 }}
							whileTap={{ scale: 1.1 }}
							exit={{ x: 100, scale: 0.8, opacity: 0 }}
							className="relative text-center"
						>
							<Image
								src={NavIcon}
								width={450}
								height={450}
								alt="3d icon rocket"
								className="inline-block drop-shadow-gradientShadow"
							/>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</section>
	);
}
