import { Project } from "@/types";
import { ArrowUpRight, GithubIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "../ui";
import { Tag } from "./tag";
import { memo } from "react";

function Card({
	name,
	backgroundCover,
	description,
	tags,
	repositoryUrl,
	deployLink,
	dictionary,
}: Project & {
	dictionary: {
		button: string;
		techs: string;
	};
}) {
	return (
		<div className="relative overflow-hidden rounded-lg bg-neutral-100/60 ring-1 ring-neutral-300/80 ring-offset-[3px] ring-offset-neutral-200 backdrop-blur-lg dark:bg-neutral-900/60 dark:ring-neutral-600 dark:ring-offset-neutral-800">
			<div className="relative h-52 w-full shadow-sm">
				<Image
					src={backgroundCover.url}
					fill
					sizes="400px"
					alt="projeto thumbnail cover"
					className="bg-contain bg-top transition-transform  hover:scale-110"
				/>
			</div>

			<div className="grid grid-flow-row gap-y-4 p-4 text-neutral-900 dark:text-neutral-100">
				<div className="grid grid-cols-[1fr,auto] items-center border-b border-neutral-300 py-1 dark:border-neutral-800">
					<h3 className="line-clamp-1 inline text-ellipsis text-lg font-bold">
						{name}
					</h3>

					<Link
						href={repositoryUrl}
						target="_blank"
						aria-label="Navigate to github repository"
						className="rounded-lg p-2 text-neutral-900 transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-500 dark:text-neutral-100"
					>
						<GithubIcon size={20} />
					</Link>
				</div>
				<Link
					href={deployLink}
					target="_blank"
					className={buttonVariants({
						variant: "neutral",
						size: "md",
					})}
				>
					{dictionary.button}
					<ArrowUpRight size={18} />
				</Link>

				<p className="line-clamp-3 text-ellipsis text-sm/6" title={description}>
					{description}
				</p>

				<div className="">
					<span className="font-medium">{dictionary.techs}</span>

					<div className="mt-2 flex w-full flex-wrap gap-2">
						{tags.map((tag) => (
							<Tag key={tag} tag={tag} />
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const CardProject = memo(Card);
