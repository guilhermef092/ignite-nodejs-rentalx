import { Request, Response } from 'express';

import { ImportCategoryUseCase } from './ImportCategoryUseCase';

class ImportCategoryController {
  // eslint-disable-next-line prettier/prettier
  constructor(private importCategoryUseCase: ImportCategoryUseCase) { }
  async handle(request: Request, response: Response): Promise<Response> {
    const { file } = request;

    if (!file) {
      return response.status(400).json({ error: 'Field file is required' });
    }

    this.importCategoryUseCase.execute(file);
    return response.status(201).send();
  }
}

export { ImportCategoryController };
