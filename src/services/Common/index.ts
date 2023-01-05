import { get } from "../serverConfig";
import { IData } from "./types";

function findData(searchval: string): Promise<IData[]> {
  return get(`?searchVal=${searchval}`, {});
}

const CommonService = {
  findData,
};

export default CommonService;
