"use client";

import NavIcon from "@/assets/nav-contact.svg";
import { Button, Input, TextArea } from "@/components/ui";
import { Dictionary } from "@/utils/mappers-i18n";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { Send } from "lucide-react";
import Image from "next/image";
import { useRef } from "react";

type ContactProps = {
	sectionId: string;
	dictionary: Dictionary["Contact"];
};

export function Contact({ sectionId, dictionary }: ContactProps) {
	const divRef = useRef<HTMLDivElement | null>(null);
	const inView = useInView(divRef);

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

							<form className="flex flex-col gap-4">
								<fieldset className="flex flex-col gap-2">
									<label
										htmlFor="name"
										className="font-medium capitalize text-neutral-900 dark:text-neutral-100"
									>
										{dictionary.form.name}
									</label>
									<Input
										id="name"
										placeholder={dictionary.form.namePlaceholder}
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
										placeholder={dictionary.form.messagePlaceholder}
										className="h-32"
									/>
								</fieldset>

								<Button
									variant="neutral"
									type="submit"
									size="lg"
									className="mx-auto mt-4 text-xs uppercase lg:w-2/4"
								>
									{dictionary.form.submit}
									<Send size={20} />
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
