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
      Addresses: {
        Row: {
          address: string | null
          created_at: string
          id: string
        }
        Insert: {
          address?: string | null
          created_at?: string
          id: string
        }
        Update: {
          address?: string | null
          created_at?: string
          id?: string
        }
        Relationships: [
          {
            foreignKeyName: "Addresses_id_fkey"
            columns: ["id"]
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
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
          created_at: string
          id: string
          message: string | null
          recipient: string | null
          sender: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          message?: string | null
          recipient?: string | null
          sender?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          message?: string | null
          recipient?: string | null
          sender?: string | null
        }
        Relationships: [
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
