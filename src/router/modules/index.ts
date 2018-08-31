const files = (require as any).context('.', false, /\.ts$/);
const modules: [] = [];

files.keys().forEach((key: string) => {
  if (key === './index.ts') { return; }
  // @ts-ignore
  modules.push(...files(key).default);
});

export default modules;
