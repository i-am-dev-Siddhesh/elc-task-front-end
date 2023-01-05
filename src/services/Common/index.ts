import { get } from "../serverConfig";
import { IData } from "../../types/index";

function findData(searchval: string): Promise<IData[]> {
  return get(`?searchVal=${searchval}`, {});
}

const CommonService = {
  findData,
};

export default CommonService;
