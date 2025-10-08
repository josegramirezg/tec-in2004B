import { useContext } from "react";
import { SearchContext } from "@/context/search-context";

export const useSearch = () => {
    const context = useContext(SearchContext);
    if (!context) {
        throw new Error("useSearch must be used within an SearchProvider");
    }
    return context;
};