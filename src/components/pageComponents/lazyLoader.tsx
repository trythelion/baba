export default function LazyLoader(item: any, delay: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, delay);
  }).then(() => item);
}
