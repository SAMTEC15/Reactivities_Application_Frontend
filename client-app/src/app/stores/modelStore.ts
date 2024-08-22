import { makeAutoObservable } from "mobx"

interface Model {
    open: boolean;
    body: JSX.Element | null
}

export default class ModelStore{
    model: Model ={
        open: false,
        body: null,
    }

    constructor(){
        makeAutoObservable(this)
    }

    openModel = (content: JSX.Element) =>{
        this.model.open = true;
        this.model.body = content;
    }

    closeModel = () =>{
        this.model.open = false;
        this.model.body = null;
    }
}