import { ServiceItem, PageTemplate } from "../../components/app";
import { GetServerSideProps } from "next";

type ProductProps = {
  id: string;
  product: {
    id: string;
    name: string;
    imageUrl: string;
    rating: number;
    reviews: number;
    category: string;
    price: number;
    bonus: string;
    distance: number;
  };
};

export default function Product({ id, product }: ProductProps) {
  return (
    <PageTemplate
      title={`${product.name} - Biznis Centar`}
      description={`Detalji o ${product.name} na Biznis Centru`}
    >
      <ServiceItem {...product} />
    </PageTemplate>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  // This is temporary mock data - in a real app, this would come from an API or database
  const mockProducts = {
    "1": {
      id: "1",
      name: "Auto Servis Marko",
      imageUrl: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.8,
      category: "Auto mehanika",
      reviews: 234,
      price: 2,
      bonus: "Popust na prvi servis",
      distance: 3.5,
    },
    "2": {
      id: "2",
      name: "Stomatološka ordinacija Smile",
      imageUrl: "https://images.pexels.com/photos/6812561/pexels-photo-6812561.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      rating: 4.9,
      category: "Zubar",
      reviews: 321,
      price: 3,
      bonus: "Besplatan pregled",
      distance: 1.8,
    },
    // Add other products as needed
  };

  const product = mockProducts[params?.id as keyof typeof mockProducts];

  if (!product) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      id: params?.id,
      product,
    },
  };
};
