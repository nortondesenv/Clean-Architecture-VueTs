export interface GraphQLErrorHandler {
    TokenExpiredError(): void;
    InvalidTokenError(message: string): void;
    default(message: string, locations: string, path: string): void;
}
