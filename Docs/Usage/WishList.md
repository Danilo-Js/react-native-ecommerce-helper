# ❤️ **WishList**

The **WishList** component displays a list of favorite products, allowing users to add items to their cart or remove them from their wishlist.

---

## 📸 **Component Preview**

<table>
  <tr>
    <td><strong>WishList</strong></td>
    <td><img src="../Images/WishList.png" alt="WishList" width="200"/></td>
  </tr>
</table>

---

## 🛠️ **Props**

| Prop            | Type                                        | Required | Description                                              |
|------------------|---------------------------------------------|----------|----------------------------------------------------------|
| `items`         | `WishlistItem[]`                            | ✅       | Array of wishlist items with `id`, `name`, `price`, and `image`. |
| `onRemoveItem`  | `(id: string) => void`                      | ✅       | Callback triggered when an item is removed from the wishlist. |
| `onAddToCart`   | `(item: WishlistItem) => void`              | ✅       | Callback triggered when an item is added to the cart.    |
| `title`         | `string`                                    | ✅       | Title text displayed at the top of the wishlist.         |
| `subTitle`      | `string`                                    | ❌       | Subtitle text displayed below the title.                |
| `styles`        | `object`                                    | ❌       | Custom styles for `container`, `itemContainer`, `image`, `itemText`, `priceText`, `buttonContainer`, `button`, `buttonText`, `title`, and `subTitle`. |

### 📦 **WishlistItem Object Structure**

```ts
interface WishlistItem {
  id: string;
  name: string;
  price: number;
  image: string;
}
```

---

## 💻 **Usage Example**

### 📝 **Basic Example**

```tsx
import React from 'react';
import {View, Alert} from 'react-native';
import {WishList} from 'react-native-ecommerce-helper/lib';

const App = () => {
  const wishlistItems = [
    {
      id: '1',
      name: 'Smartphone',
      price: 699.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '2',
      name: 'Headphones',
      price: 199.99,
      image: 'https://via.placeholder.com/150',
    },
    {
      id: '3',
      name: 'Smartwatch',
      price: 299.99,
      image: 'https://via.placeholder.com/150',
    },
  ];

  const handleRemoveItem = id => {
    Alert.alert('Removed', `Item with ID: ${id} removed from wishlist`);
  };

  const handleAddToCart = item => {
    Alert.alert('Added to Cart', `${item.name} added to the cart`);
  };

  return (
    <View style={{flex: 1}}>
      <WishList
        items={wishlistItems}
        onRemoveItem={handleRemoveItem}
        onAddToCart={handleAddToCart}
        title="My Wishlist"
        subTitle="Your favorite products"
      />
    </View>
  );
};

export default App;
```

---

## 🧪 **Testing**

Make sure to test the component after adding it to your project:

```sh
npx react-native run-android
```

or for iOS:

```sh
npx react-native run-ios
```

---

For more information or advanced customization, refer to the [main documentation](../../README.md).
