
function mapTo<TSource extends object, TTarget extends object>(
    source: TSource[]
  ): TTarget[] {
    return source.map(item => {
      const result = {} as TTarget;
  
      (Object.keys(item) as (keyof TSource)[]).forEach(key => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (result as any)[key] = (item as any)[key];
      });
  
      return result;
    });
  }

  export default mapTo;