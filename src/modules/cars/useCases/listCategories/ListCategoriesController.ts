import { Request, Response } from 'express';

import { ListCategoriesUseCase } from './ListCategoriesUseCase';

export { Request, Response } from 'express';

class ListCategoriesController {
  // eslint-disable-next-line prettier/prettier
  constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listCategoriesUseCase.excecute();

    return response.json(all);
  }
}

export { ListCategoriesController };
