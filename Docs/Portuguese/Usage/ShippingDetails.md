# 📦 **Detalhes de Envio**

O componente **ShippingDetails** oferece uma interface completa para coletar informações de envio do usuário, com validação para campos obrigatórios.

---

## 📸 **Pré-visualização do Componente**

<table>
  <tr>
    <td><strong>Detalhes de Envio</strong></td>
    <td><img src="../../Images/ShippingDetails.png" alt="ShippingDetails" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Propriedades (Props)**

| Propriedade   | Tipo                                            | Obrigatória | Descrição                                                    |
|---------------|--------------------------------------------------|-------------|--------------------------------------------------------------|
| `onSubmit`    | `(shippingDetails: ShippingDetailsData) => void` | ✅          | Função de callback acionada quando o formulário é enviado.   |
| `title`       | `string`                                        | ✅          | Texto do título exibido no topo do formulário.               |
| `subTitle`    | `string`                                        | ❌          | Texto do subtítulo exibido abaixo do título.                 |
| `styles`      | `object`                                        | ❌          | Estilos personalizados para `container`, `title`, `subTitle`, `input`, `button` e `buttonText`. |

---

### 📦 **Estrutura do Objeto ShippingDetailsData**

```ts
interface ShippingDetailsData {
  recipientName: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
  phone: string;
  email: string;
}
```

---

## 💻 **Exemplo de Uso**

### 📝 **Exemplo Básico**

```tsx
import React from 'react';
import {View, Alert} from 'react-native';
import {ShippingDetails} from 'react-native-ecommerce-helper/lib';

const ShippingDetailsTest = () => {
  const handleShippingDetails = shippingDetails => {
    console.log('Shipping Details:', shippingDetails);
    Alert.alert('Success', 'Shipping details submitted!');
  };

  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <ShippingDetails
        title="Shipping Information"
        subTitle="Please enter your shipping details below"
        onSubmit={handleShippingDetails}
      />
    </View>
  );
};

export default ShippingDetailsTest;
```

---

## 🧪 **Testando o Componente**

Certifique-se de testar o componente após adicioná-lo ao seu projeto:

```sh
npx react-native run-android
```

ou para iOS:

```sh
npx react-native run-ios
```

---

Para mais informações ou personalizações avançadas, consulte a [documentação principal](../../README.md).