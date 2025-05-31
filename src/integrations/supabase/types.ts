export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      calendar_items: {
        Row: {
          assignee: string | null
          created_at: string | null
          duration: number
          id: string
          start_week: number
          status: string
          stream: string
          title: string
          type: string
          updated_at: string | null
          week_end: number | null
          week_start: number | null
        }
        Insert: {
          assignee?: string | null
          created_at?: string | null
          duration?: number
          id?: string
          start_week: number
          status?: string
          stream?: string
          title: string
          type: string
          updated_at?: string | null
          week_end?: number | null
          week_start?: number | null
        }
        Update: {
          assignee?: string | null
          created_at?: string | null
          duration?: number
          id?: string
          start_week?: number
          status?: string
          stream?: string
          title?: string
          type?: string
          updated_at?: string | null
          week_end?: number | null
          week_start?: number | null
        }
        Relationships: []
      }
      integrations: {
        Row: {
          config: Json
          created_at: string | null
          enabled: boolean
          id: string
          name: string
          updated_at: string | null
        }
        Insert: {
          config?: Json
          created_at?: string | null
          enabled?: boolean
          id?: string
          name: string
          updated_at?: string | null
        }
        Update: {
          config?: Json
          created_at?: string | null
          enabled?: boolean
          id?: string
          name?: string
          updated_at?: string | null
        }
        Relationships: []
      }
      kpis: {
        Row: {
          completed_tasks: number
          completion_percentage: number
          created_at: string | null
          date: string
          id: string
          overdue_tasks: number
          total_tasks: number
        }
        Insert: {
          completed_tasks?: number
          completion_percentage?: number
          created_at?: string | null
          date: string
          id?: string
          overdue_tasks?: number
          total_tasks?: number
        }
        Update: {
          completed_tasks?: number
          completion_percentage?: number
          created_at?: string | null
          date?: string
          id?: string
          overdue_tasks?: number
          total_tasks?: number
        }
        Relationships: []
      }
      project_indicators: {
        Row: {
          budget: string
          created_at: string
          id: string
          planning: string
          project_id: string
          resources: string
          updated_at: string
          weather_emoji: string
          weather_label: string
        }
        Insert: {
          budget?: string
          created_at?: string
          id?: string
          planning?: string
          project_id?: string
          resources?: string
          updated_at?: string
          weather_emoji?: string
          weather_label?: string
        }
        Update: {
          budget?: string
          created_at?: string
          id?: string
          planning?: string
          project_id?: string
          resources?: string
          updated_at?: string
          weather_emoji?: string
          weather_label?: string
        }
        Relationships: []
      }
      project_notes: {
        Row: {
          content: string | null
          created_at: string
          id: string
          project_id: string
          updated_at: string
        }
        Insert: {
          content?: string | null
          created_at?: string
          id?: string
          project_id?: string
          updated_at?: string
        }
        Update: {
          content?: string | null
          created_at?: string
          id?: string
          project_id?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_settings: {
        Row: {
          currency: string | null
          end_date: string | null
          id: string
          name: string
          objective: string | null
          spent_budget: number | null
          start_date: string | null
          total_budget: number | null
          updated_at: string | null
        }
        Insert: {
          currency?: string | null
          end_date?: string | null
          id?: string
          name?: string
          objective?: string | null
          spent_budget?: number | null
          start_date?: string | null
          total_budget?: number | null
          updated_at?: string | null
        }
        Update: {
          currency?: string | null
          end_date?: string | null
          id?: string
          name?: string
          objective?: string | null
          spent_budget?: number | null
          start_date?: string | null
          total_budget?: number | null
          updated_at?: string | null
        }
        Relationships: []
      }
      resources: {
        Row: {
          category: string | null
          created_at: string | null
          id: string
          title: string
          url: string
        }
        Insert: {
          category?: string | null
          created_at?: string | null
          id?: string
          title: string
          url: string
        }
        Update: {
          category?: string | null
          created_at?: string | null
          id?: string
          title?: string
          url?: string
        }
        Relationships: []
      }
      streams: {
        Row: {
          color: string
          created_at: string
          id: string
          name: string
          position: number
          updated_at: string
        }
        Insert: {
          color?: string
          created_at?: string
          id?: string
          name: string
          position?: number
          updated_at?: string
        }
        Update: {
          color?: string
          created_at?: string
          id?: string
          name?: string
          position?: number
          updated_at?: string
        }
        Relationships: []
      }
      tasks: {
        Row: {
          active: boolean
          assignee: string | null
          attachments: string[] | null
          comments: Json | null
          created_at: string | null
          description: string | null
          due_date: string | null
          effort: string | null
          id: string
          position: number
          start_date: string | null
          status: string
          stream: string | null
          stream_id: string | null
          title: string
          updated_at: string | null
        }
        Insert: {
          active?: boolean
          assignee?: string | null
          attachments?: string[] | null
          comments?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          effort?: string | null
          id?: string
          position?: number
          start_date?: string | null
          status: string
          stream?: string | null
          stream_id?: string | null
          title: string
          updated_at?: string | null
        }
        Update: {
          active?: boolean
          assignee?: string | null
          attachments?: string[] | null
          comments?: Json | null
          created_at?: string | null
          description?: string | null
          due_date?: string | null
          effort?: string | null
          id?: string
          position?: number
          start_date?: string | null
          status?: string
          stream?: string | null
          stream_id?: string | null
          title?: string
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_tasks_stream"
            columns: ["stream_id"]
            isOneToOne: false
            referencedRelation: "streams"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string | null
          email: string
          id: string
          status: string
        }
        Insert: {
          created_at?: string | null
          email: string
          id?: string
          status?: string
        }
        Update: {
          created_at?: string | null
          email?: string
          id?: string
          status?: string
        }
        Relationships: []
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

type DefaultSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      Database[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
