type TagProps = {
	tag: string;
};

export function Tag({ tag }: TagProps) {
	return (
		<span className="rounded-lg border border-neutral-400/60 bg-transparent px-4 py-2 text-sm font-medium lowercase text-neutral-800 shadow-[inset_0px_0px_2px_1px_rgb(212,212,212)] dark:border-neutral-700 dark:text-neutral-100 dark:shadow-[inset_0px_0px_1px_1px_rgb(38,38,38)]">
			{tag}
		</span>
	);
}
