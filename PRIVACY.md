# Plugin privacy

The CreatorSkills plugin consists of instructions, public catalog metadata, app preparation guides, and an optional catalog script. It does not include telemetry, a background service, a remote database, or a training pipeline.

Your host agent processes the conversation and files under that host's own policies. The plugin does not control how Grok Bot or another host processes or retains them.

The optional catalog finder requests public catalog pages from `https://creatorskills.co/api/mcp/skills`. It sends no prompt, transcript, search query, email, purchase token, or credential. Like other HTTPS requests, the server can observe connection information such as the request's IP address. The finder does not persist a user profile. It falls back to the bundled snapshot when live retrieval cannot be verified.

Following product or hosted-app links leaves the plugin. The CreatorSkills website and any separately connected service have their own privacy and account policies. App preparation does not automatically upload your brief. Check authorization before submitting private material to a website or connector.

If you ask the host to save a creator brief or draft, that file is stored where you choose. The plugin does not claim cross-session memory. Contact support@creatorskills.co with privacy questions.
