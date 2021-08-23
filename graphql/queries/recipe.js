import * as services from '../../services/index.js';
import recipesTypeInput from '../types/recipes.js';
import PaginatedListTypeOutput from "../types/paginationOutput.js";
import PaginationArgTypeParams from "../types/paginationParam.js";

const defaultValue = { offset: 0, limit: 5, keyword: "" };

// Query
const queryTypeRecipe = {
    recipes: {
        type: PaginatedListTypeOutput(recipesTypeInput),
        args: {
            pagination: {
                type: PaginationArgTypeParams,
                defaultValue
            }
        },
        resolve: (_, args) => {
            const { offset, limit, keyword } = args.pagination;
            return {
                items: services.getRecipes(offset, limit, keyword),
            }
        }
    }
}

export default queryTypeRecipe