const files = (require as any).context('.', false, /\.ts$/);
const modules: any[] = [];

files.keys().forEach((key: string) => {
  if (key === './index.ts') { return; }
  modules.push(...files(key).default);
});

export default modules;
