import React, { useState } from "react";
import { PageTemplate } from "../../components/app";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../../lib/firebase";

export default function AddService() {
  const [formData, setFormData] = useState({
    name: "",
    brandUrl: "",
    rating: 0,
    reviews: 0,
    category: "",
    price: 0,
    bonus: "",
    imageUrl: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage("");

    try {
      const servicesRef = collection(db, "services");
      await addDoc(servicesRef, {
        ...formData,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
      setMessage("Usluga je uspešno dodata!");
      setFormData({
        name: "",
        brandUrl: "",
        rating: 0,
        reviews: 0,
        category: "",
        price: 0,
        bonus: "",
        imageUrl: "",
      });
    } catch (error) {
      console.error("Error adding service:", error);
      setMessage("Došlo je do greške prilikom dodavanja usluge.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "rating" || name === "reviews" || name === "price" ? Number(value) : value,
    }));
  };

  return (
    <PageTemplate
      title="Dodaj novu uslugu"
      description="Dodajte novu uslugu u bazu podataka"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-[#182135] mb-6">Dodaj novu uslugu</h1>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Naziv usluge
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                Kategorija
              </label>
              <input
                type="text"
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="brandUrl" className="block text-sm font-medium text-gray-700 mb-1">
                URL slike brenda
              </label>
              <input
                type="url"
                id="brandUrl"
                name="brandUrl"
                value={formData.brandUrl}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="imageUrl" className="block text-sm font-medium text-gray-700 mb-1">
                URL slike usluge
              </label>
              <input
                type="url"
                id="imageUrl"
                name="imageUrl"
                value={formData.imageUrl}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
                  Ocena
                </label>
                <input
                  type="number"
                  id="rating"
                  name="rating"
                  value={formData.rating}
                  onChange={handleChange}
                  min="0"
                  max="5"
                  step="0.1"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="reviews" className="block text-sm font-medium text-gray-700 mb-1">
                  Broj ocena
                </label>
                <input
                  type="number"
                  id="reviews"
                  name="reviews"
                  value={formData.reviews}
                  onChange={handleChange}
                  min="0"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                Cena (din)
              </label>
              <input
                type="number"
                id="price"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="0"
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            <div>
              <label htmlFor="bonus" className="block text-sm font-medium text-gray-700 mb-1">
                Bonus (npr. Popust na prvi servis)
              </label>
              <input
                type="text"
                id="bonus"
                name="bonus"
                value={formData.bonus}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:border-transparent"
              />
            </div>

            {message && (
              <div className={`p-4 rounded-md ${message.includes("greške") ? "bg-red-50 text-red-700" : "bg-green-50 text-green-700"}`}>
                {message}
              </div>
            )}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#503e9d] text-white py-2 px-4 rounded-md hover:bg-[#3c2e7a] focus:outline-none focus:ring-2 focus:ring-[#503e9d] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Dodavanje..." : "Dodaj uslugu"}
            </button>
          </form>
        </div>
      </div>
    </PageTemplate>
  );
} 