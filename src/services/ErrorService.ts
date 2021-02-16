import BaseService from '@/services/BaseService';

export interface IErrorService {
    context?: any;
}

export default class ErrorService implements BaseService {
    context: any;

    constructor({ context = 'Desconhecido' }: IErrorService) {
        this.context = context;
    }

    async handle(error: any) {
        alert(`Error: ${this.context}`);
        alert(error);
        return;
    }
}
