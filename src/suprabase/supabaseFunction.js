import { supabase } from './supabaseClient'

const GetAllUsers = async () => {
    let { data: users, error } = await supabase
        .from('users')
        .select('email')
    if (error) {
        console.log(error.message);
        return []
    } else {
        return users;
    }
}

const CreateUser = async (email) => {
    const { data, error } = await supabase
        .from('users')
        .insert([
            { email },
        ])
        .select()
    if (error) {
        console.log(error)
        return []
    } else {
        return data
    }
}

export { GetAllUsers, CreateUser }