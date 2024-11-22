/* eslint-disable @typescript-eslint/no-explicit-any */
import UserRepository from "../repositories/UserRepository";

class UserService {
  async getAdmins(page: number = 1, perPage: number = 20) {
    const { data, error } = await UserRepository.listUsers(page, perPage);
    if (error) throw new Error(error.message);

    return data.users.filter((user) => user.user_metadata.is_admin === true);
  }

  async addAdmin(email: string, password: string, metadata: any) {
    const user = {
      email,
      password,
      user_metadata: { ...metadata, is_admin: true, role: "admin" },
      email_confirm: true,
    };

    const { data, error } = await UserRepository.createUser(user);
    if (error) throw new Error(error.message);

    return data;
  }

  async removeAdmin(userId: string) {
    const { data, error } = await UserRepository.deleteUser(userId);
    if (error) throw new Error(error.message);

    return data;
  }

  async updateAdmin(userId: string, updates: any) {
    const { data, error } = await UserRepository.updateUser(userId, updates);
    if (error) throw new Error(error.message);

    return data;
  }
}

export default new UserService();
