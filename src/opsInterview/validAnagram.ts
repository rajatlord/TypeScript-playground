export function isAnagram(s: string, t: string): boolean {
    // brute approach
    // return s.split('').sort().join('') === t.split('').sort().join('');

    // optimal approach
    if (s.length !== t.length) return false;

    const map = new Map<string, number>();

    // count chars from s
    for (let ch of s) {
        map.set(ch, (map.get(ch) || 0) + 1);
    }

    // remove chars using t
    for (let ch of t) {

        if (!map.has(ch)) {
            return false;
        }

        map.set(ch, map.get(ch)! - 1);

        if (map.get(ch) === 0) {
            map.delete(ch);
        }
    }

    return map.size === 0;
};