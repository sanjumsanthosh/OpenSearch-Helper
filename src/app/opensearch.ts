import { Client } from '@opensearch-project/opensearch';

class OpenSearchHelper {
  private client: Client;

  constructor(username: string, password: string, endpoint: string) {
    this.client = new Client({
      node: endpoint,
      auth: {
        username,
        password,
      },
    });
  }

  async testConnection() {
    try {
      const response = await this.client.cluster.health();
      return response.body;
    } catch (error) {
      throw new Error(`Connection failed: ${error.message}`);
    }
  }

  async createIndex(indexName: string, mappings: object) {
    try {
      const response = await this.client.indices.create({
        index: indexName,
        body: {
          mappings,
        },
      });
      return response.body;
    } catch (error) {
      throw new Error(`Create index failed: ${error.message}`);
    }
  }

  async deleteIndex(indexName: string) {
    try {
      const response = await this.client.indices.delete({
        index: indexName,
      });
      return response.body;
    } catch (error) {
      throw new Error(`Delete index failed: ${error.message}`);
    }
  }

  async getIndex(indexName: string) {
    try {
      const response = await this.client.indices.get({
        index: indexName,
      });
      return response.body;
    } catch (error) {
      throw new Error(`Get index failed: ${error.message}`);
    }
  }

  async updateMapping(indexName: string, mappings: object) {
    try {
      const response = await this.client.indices.putMapping({
        index: indexName,
        body: mappings,
      });
      return response.body;
    } catch (error) {
      throw new Error(`Update mapping failed: ${error.message}`);
    }
  }

  async addAnalyzer(indexName: string, analyzerConfig: object) {
    try {
      const response = await this.client.indices.putSettings({
        index: indexName,
        body: {
          analysis: analyzerConfig,
        },
      });
      return response.body;
    } catch (error) {
      throw new Error(`Add analyzer failed: ${error.message}`);
    }
  }

  async search(indexName: string, query: object) {
    try {
      const response = await this.client.search({
        index: indexName,
        body: query,
      });
      return response.body;
    } catch (error) {
      throw new Error(`Search failed: ${error.message}`);
    }
  }
}

export default OpenSearchHelper;
