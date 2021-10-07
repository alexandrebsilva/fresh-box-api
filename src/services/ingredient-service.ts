import { Ingredient } from "../entities/ingredient";
import { IngredientRepository } from "../repository/ingredient-repository";

export class IngredientService {
  constructor(
    private readonly ingredientRepository = new IngredientRepository()
  ) {}

  public async getAll(): Promise<Ingredient[]> {
    const result = await this.ingredientRepository.findAll();
    return result;
  }

  public async getById(id: number): Promise<Ingredient | undefined> {
    const result = await this.ingredientRepository.findById(id);
    return result;
  }

  public async create(ingredient: Ingredient): Promise<void> {
    await this.ingredientRepository.create(ingredient);
  }
}
