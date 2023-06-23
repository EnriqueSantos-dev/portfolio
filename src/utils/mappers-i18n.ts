import { getDictionary } from "@/i18n/get-dictionary";

type Dictionary = Awaited<ReturnType<typeof getDictionary>>;

export function mapperDictValuesFromKey<TKey extends keyof Dictionary>(
	dictionary: Dictionary,
	key: TKey
): { [Key in keyof Dictionary[TKey]]: Dictionary[TKey][Key] } {
	return { ...dictionary[key] };
}
