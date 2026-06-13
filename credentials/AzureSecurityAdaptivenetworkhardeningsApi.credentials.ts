import type {
        IAuthenticateGeneric,
        Icon,
        ICredentialType,
        INodeProperties,
} from 'n8n-workflow';

export class AzureSecurityAdaptivenetworkhardeningsApi implements ICredentialType {
        name = 'N8nDevAzureSecurityAdaptivenetworkhardeningsApi';

        displayName = 'Azure Security Adaptivenetworkhardenings API';

        icon: Icon = { light: 'file:../nodes/AzureSecurityAdaptivenetworkhardenings/azure-security-adaptivenetworkhardenings.png', dark: 'file:../nodes/AzureSecurityAdaptivenetworkhardenings/azure-security-adaptivenetworkhardenings.dark.png' };

        documentationUrl = '';

        properties: INodeProperties[] = [
          {
                        displayName: 'Base URL',
                        name: 'url',
                        type: 'string',
                        default: '',
                        required: true,
                        placeholder: 'https://api.example.com',
                        description: 'The base URL of your Azure Security Adaptivenetworkhardenings API server',
                },
                {
                        displayName: 'API Key',
                        name: 'apiKey',
                        type: 'string',
                        typeOptions: { password: true },
                        default: '',
                        required: false,
                },
        
        ];

  authenticate: IAuthenticateGeneric = {
                type: 'generic',
                properties: {
                        headers: {
                                Authorization: '=Bearer {{$credentials.apiKey}}',
                        },
                },
        };


}
