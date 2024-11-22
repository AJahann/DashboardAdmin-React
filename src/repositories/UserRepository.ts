/* eslint-disable @typescript-eslint/no-explicit-any */
import { createClient } from "@supabase/supabase-js";

const supabaseAdmin = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ADMIN,
);

class UserRepository {
  async listUsers(page: number, perPage: number) {
    return supabaseAdmin.auth.admin.listUsers({ page, perPage });
  }

  async createUser(user: {
    email?: string;
    password: string;
    user_metadata: any;
    phone?: string;
  }) {
    return supabaseAdmin.auth.admin.createUser({
      ...user,
      email_confirm: true,
      phone_confirm: true,
    });
  }

  async deleteUser(userId: string) {
    return supabaseAdmin.auth.admin.deleteUser(userId);
  }

  async updateUser(userId: string, updates: any) {
    return supabaseAdmin.auth.admin.updateUserById(userId, updates);
  }
}

export default new UserRepository();
