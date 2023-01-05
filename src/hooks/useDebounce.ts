import { useEffect, useState } from "react";
import CommonService from "../services/Common";
import { IData } from "../services/Common/types";

export const useDebounce = (value: string, milliSeconds: number) => {
  const [debouncedValue, setDebouncedValue] = useState<IData[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setIsLoading(true);
    const handler = setTimeout(async () => {
      await CommonService.findData(value)
        .then((resp) => {
          setDebouncedValue(resp);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, milliSeconds);

    return () => {
      clearTimeout(handler);
    };
  }, [value, milliSeconds]);

  return { data: debouncedValue, isLoading };
};
