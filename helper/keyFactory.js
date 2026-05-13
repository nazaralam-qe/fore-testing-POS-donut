export async function getKey(keyName, platform) {
    const module = await import(`../key-definitions/${platform}/${keyName}_key_${platform}.js`);
    return new module.default();
}
