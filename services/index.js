import firebase from 'firebase';

export const getRecipes = (offset, limit, keyword) => {
    const recipeReference = firebase.database().ref("/Recipes/");
    return (new Promise((resolve, reject) => {
        recipeReference.on("value", (result) => {
            const dataObject = result.val()
            const data = Object.keys(dataObject).map(o => Object.assign({ _id: o }, dataObject[o]));
            resolve(data)
            recipeReference.off("value");
        }, (errorObject) => {
            console.log("The read failed: " + errorObject.code);
            reject("The read failed: " + errorObject.code);
        });
    }))
}
export const createRecipes = (recipesInput) => {
    const { _id, recipe, origin, ingridients, image, category } = recipesInput
    const referencePath = `/Recipes/${_id}/`;
    const recipeReference = firebase.database().ref(referencePath);
    return (new Promise((resolve, reject) => {
        recipeReference.set({ recipe, origin, ingridients, image, category }, (error) => {
            if (error) {
                reject("Data could not be deleted." + error);
            } else {
                resolve(recipesInput);
            }
        });
    }));
}
