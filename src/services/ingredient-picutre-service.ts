import { IngredientPicture } from "../entities/ingredient-picture";
import { IngredientPictureRepository } from "../repository/ingredient-picture-repository";

export class IngredientPictureService {
  constructor(
    private readonly ingredientRepository = new IngredientPictureRepository()
  ) {}

  public async getAll(): Promise<IngredientPicture[]> {
    const result = await this.ingredientRepository.findAll();
    return result;
  }

  public async getById(id: number): Promise<IngredientPicture | undefined> {
    const result = await this.ingredientRepository.findById(id);
    return result;
  }

  public async create(ingredientPicture: IngredientPicture): Promise<void> {
    await this.ingredientRepository.create(ingredientPicture);
  }
}
