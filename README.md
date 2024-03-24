# Configuration mappings

Features:
- Port selection order

Env > Default > Ephemeral
1) Env
Check for then environment variable ENV_PORT
2) Default
App default port
3) Ephemeral port

- Get other servers location
- Default server's location
- Default servers app folder

Different than port selection this one doesn't check overrides on env.

Order: '/srv/www' > '~/.local/share/good-roots'
1) Try to use /srv/www
2) Fallback to ~/.local/share/good-roots
