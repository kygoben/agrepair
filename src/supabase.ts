export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      Bids: {
        Row: {
          contract: string | null
          contractor_id: string | null
          created_at: string
          description: string | null
          id: string
        }
        Insert: {
          contract?: string | null
          contractor_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
        }
        Update: {
          contract?: string | null
          contractor_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Bids_contract_fkey"
            columns: ["contract"]
            referencedRelation: "User_repair_contracts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Bids_contractor_id_fkey"
            columns: ["contractor_id"]
            referencedRelation: "Contractors"
            referencedColumns: ["id"]
          }
        ]
      }
      chats: {
        Row: {
          created_at: string
          id: number
        }
        Insert: {
          created_at?: string
          id?: number
        }
        Update: {
          created_at?: string
          id?: number
        }
        Relationships: []
      }
      chats_users: {
        Row: {
          chat_id: number
          user_id: string | null
        }
        Insert: {
          chat_id?: number
          user_id?: string | null
        }
        Update: {
          chat_id?: number
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chats_users_chat_id_fkey"
            columns: ["chat_id"]
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chats_users_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          }
        ]
      }
      Contractors: {
        Row: {
          created_at: string
          description: string | null
          id: string
          repair_id: string | null
          user_id: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          repair_id?: string | null
          user_id?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          repair_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Contractors_repair_id_fkey"
            columns: ["repair_id"]
            referencedRelation: "Repairs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Contractors_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Equipment: {
        Row: {
          created_at: string
          id: string
          make: string | null
          model: string | null
          year: number | null
        }
        Insert: {
          created_at?: string
          id?: string
          make?: string | null
          model?: string | null
          year?: number | null
        }
        Update: {
          created_at?: string
          id?: string
          make?: string | null
          model?: string | null
          year?: number | null
        }
        Relationships: []
      }
      Messages: {
        Row: {
          author_id: string | null
          chat_id: number | null
          created_at: string
          id: string
          message: string | null
          recipient: string | null
          sender: string | null
        }
        Insert: {
          author_id?: string | null
          chat_id?: number | null
          created_at?: string
          id?: string
          message?: string | null
          recipient?: string | null
          sender?: string | null
        }
        Update: {
          author_id?: string | null
          chat_id?: number | null
          created_at?: string
          id?: string
          message?: string | null
          recipient?: string | null
          sender?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Messages_author_id_fkey"
            columns: ["author_id"]
            referencedRelation: "Users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Messages_chat_id_fkey"
            columns: ["chat_id"]
            referencedRelation: "chats"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Messages_recipient_fkey"
            columns: ["recipient"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "Messages_sender_fkey"
            columns: ["sender"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Repairs: {
        Row: {
          created_at: string
          description: string | null
          equipment_id: string | null
          id: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          equipment_id?: string | null
          id?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          equipment_id?: string | null
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Repairs_equipment_id_fkey"
            columns: ["equipment_id"]
            referencedRelation: "Equipment"
            referencedColumns: ["id"]
          }
        ]
      }
      User_owns_equipment: {
        Row: {
          created_at: string
          equipment_id: string
          user_id: string
        }
        Insert: {
          created_at?: string
          equipment_id: string
          user_id: string
        }
        Update: {
          created_at?: string
          equipment_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "User_owns_equipment_equipment_id_fkey"
            columns: ["equipment_id"]
            referencedRelation: "Equipment"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User_owns_equipment_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      User_repair_contracts: {
        Row: {
          completed: boolean | null
          contractor_id: string | null
          created_at: string
          description: string | null
          id: string
          repair_id: string | null
          user_id: string | null
        }
        Insert: {
          completed?: boolean | null
          contractor_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          repair_id?: string | null
          user_id?: string | null
        }
        Update: {
          completed?: boolean | null
          contractor_id?: string | null
          created_at?: string
          description?: string | null
          id?: string
          repair_id?: string | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "User_repair_contracts_contractor_id_fkey"
            columns: ["contractor_id"]
            referencedRelation: "Contractors"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User_repair_contracts_repair_id_fkey"
            columns: ["repair_id"]
            referencedRelation: "Repairs"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "User_repair_contracts_user_id_fkey"
            columns: ["user_id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      Users: {
        Row: {
          address: string | null
          created_at: string
          id: string
          name: string | null
        }
        Insert: {
          address?: string | null
          created_at?: string
          id: string
          name?: string | null
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: string
          name?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "Users_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
