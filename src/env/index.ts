import dotenv from "dotenv";

/**
 * Initialize dotenv in order
 */
export function initializeDotenv() {
	// First the default env
	dotenv.config({
		path: ".env"
	});
    
    // Then the production env
    dotenv.config({
        path: ".env.production"
    });
    
    // Then the development env
    dotenv.config({
        path: ".env.development"
    });
    
    // Then the local env
    dotenv.config({
        path: ".env.local"
    });
    
    dotenv.config({
        path: ".env.production.local"
    });
	
    dotenv.config({
        path: ".env.development.local"
    });
}
