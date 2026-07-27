export interface AppNewsItem {
    id: number;
    content: string;
    linkText: string;
    to: string;
}

export interface AppState {
    preset: string;
    primary: string;
    darkTheme: boolean;
    codeSandbox: boolean;
    newsActive: boolean;
    announcement: AppNewsItem | null;
    storageKey: string;
}
