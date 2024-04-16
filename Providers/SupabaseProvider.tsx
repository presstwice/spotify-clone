"use client";

import { Database } from "../types_db";
import { useState } from "react";
import { createClient } from "@supabase/supabase-js";

interface SupabaseProviderProps {
    children: React.ReactNode
};

const SupabaseProvider: React.FC<SupabaseProviderProps> = ({ 
    children
}) => {
    const [supabaseClient] = useState () => 
}