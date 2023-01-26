module.exports = {
  apps : [{
    name   : "circons",
    script : "npm run start",
    env_production: {
	NODE_ENV: "production"
    }
  }]
}
