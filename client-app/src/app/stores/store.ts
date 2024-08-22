import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";
import CommonStore from "./commonStore";
import userStore from "./userStore";
import ModelStore from "./modelStore";

interface Store{
    activityStore: ActivityStore;
    commonStore: CommonStore;
    userStore: userStore;
    modelStore: ModelStore;

}

export const store: Store = {
    activityStore: new ActivityStore(),
    commonStore: new CommonStore(),
    userStore: new userStore(),
    modelStore: new ModelStore()
}

export const StoreContext = createContext(store);

export function useStore(){
    return useContext(StoreContext);
}