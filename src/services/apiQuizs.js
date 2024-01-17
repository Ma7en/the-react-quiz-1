import supabase from "./supabase";

export async function getQuizs() {
    let { data, error } = await supabase.from("quizs").select("*");

    if (error) {
        console.error(error);
        throw new Error("Quizs could not be loaded");
    }
    return data;
}
