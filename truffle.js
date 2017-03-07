module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "1337" // Match any network id
    },
      live: {
          host: "localhost",
         port: 8545,
          network_id: "default",
          from: "7462b541d9bd67f33da72f910af3dde9b54fdea7"
          
      }
  }
};
