import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDatabase implements InMemoryDbService {

  createDb() {
    const categories = [
      {id: 1, name: 'Lazer' , description: 'Cinema, parques,praia,etc...'},
      {id: 2, name: 'Saúde' , description: 'Plano de Saúde e remedios'},
      {id: 3, name: 'Moradia' , description: 'Pagamentos de contas da Casa'},
      {id: 4, name: 'Salario' , description: 'Recebimento de Sálario'},
      {id: 5, name: 'Freelas' , description: 'Trabalhos como freelancer'}
      ];
    return {categories};
  }
}
