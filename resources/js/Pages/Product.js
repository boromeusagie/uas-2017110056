import React from 'react';
import Authenticated from '@/Layouts/Authenticated';
import { Head } from '@inertiajs/inertia-react';
import Modal from 'react-modal';

export default function Product(props) {
    let subtitle;

    const [
        modalNewCategoryIsOpen,
        setNewCategoryIsOpen,
        modalNewProductIsOpen,
        setNewProductIsOpen,
        modalEditCategoryIsOpen,
        setEditCategoryIsOpen,
        modalEditProductIsOpen,
        setEditProductIsOpen,
        modalDeleteCategoryIsOpen,
        setDeleteCategoryIsOpen,
        modalDeleteProductIsOpen,
        setDeleteProductIsOpen,
    ] = React.useState(false);

    function openNewCategoryModal() {
        setNewCategoryIsOpen(true);
    }

    function afterNewCategoryOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeNewCategoryModal() {
        setNewCategoryIsOpen(false);
    }

    function openNewProductModal() {
        setNewProductIsOpen(true);
    }

    function afterNewProductOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeNewProductModal() {
        setNewProductIsOpen(false);
    }

    function openEditCategoryModal() {
        setEditCategoryIsOpen(true);
    }

    function afterEditCategoryOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeEditCategoryModal() {
        setEditCategoryIsOpen(false);
    }

    function openEditProductModal() {
        setIsOpen(true);
    }

    function afterEditProductOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeEditProductModal() {
        setIsOpen(false);
    }

    function openDeleteCategoryModal() {
        setIsOpen(true);
    }

    function afterDeleteCategoryOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeDeleteCategoryModal() {
        setIsOpen(false);
    }

    function openDeleteProductModal() {
        setIsOpen(true);
    }

    function afterDeleteProductOpenModal() {
        subtitle.style.color = '#f00';
    }

    function closeDeleteProductModal() {
        setIsOpen(false);
    }

    return (
        <Authenticated
            auth={props.auth}
            errors={props.errors}
            header={<h2 className="font-semibold text-xl md:text-3xl leading-tight">Product</h2>}
        >
            <Head title="Product" />

            <div className="flex flex-row flex-wrap w-full">
                <div className="w-full lg:w-1/4">
                    <div className="py-12">
                        <div className="container mx-auto md:px-4">
                            <div className="w-full mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 bg-white border-b border-gray-200">
                                        <table className="border-collapse border border-gray-400 w-full">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Name</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.categories.map((category, index) => (
                                                    <tr data-index={index}>
                                                        <td className="border border-gray-300 p-1">{category.name}</td>
                                                        <td className="border border-gray-300 p-1">
                                                            <div className="flex justify-center align-items-center">
                                                                <button onClick={openEditCategoryModal} className="text-blue-500 hover:text-blue-900 mr-1">
                                                                    <i className="fas fa-edit"></i>
                                                                </button>
                                                                <a href="#" className="text-red-500 hover:text-red-900">
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-3/4">
                    <div className="lg:py-12">
                        <div className="container mx-auto md:px-4">
                            <div className="w-full mx-auto sm:px-6 lg:px-8">
                                <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                                    <div className="p-6 bg-white border-b border-gray-200 overflow-x-auto">
                                        <table className="border-collapse border border-gray-400 w-full table-auto">
                                            <thead>
                                                <tr>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Name</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Category</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Price</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Stock</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Description</th>
                                                    <th className="border border-gray-300 bg-gray-300 p-2">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {props.products.map((product, index) => (
                                                    <tr data-index={index}>
                                                        <td className="border border-gray-300 p-1">{product.name}</td>
                                                        <td className="border border-gray-300 p-1">{product.category.name}</td>
                                                        <td className="border border-gray-300 p-1 text-center">{product.price}</td>
                                                        <td className="border border-gray-300 p-1 text-center">{product.stock}</td>
                                                        <td className="border border-gray-300 p-1">{product.description}</td>
                                                        <td className="border border-gray-300 p-1">
                                                            <div className="flex justify-center align-items-center">
                                                                <a href="#" className="text-blue-500 hover:text-blue-900 mr-1">
                                                                    <i className="fas fa-edit"></i>
                                                                </a>
                                                                <a href="#" className="text-red-500 hover:text-red-900">
                                                                    <i className="fas fa-trash-alt"></i>
                                                                </a>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Modal
                isOpen={modalEditCategoryIsOpen}
                onAfterOpen={afterEditCategoryOpenModal}
                onRequestClose={closeEditCategoryModal}
                contentLabel="Example Modal"
            >
                <button onClick={closeEditCategoryModal}>close</button>
                <div>I am a modal</div>
                <form>
                    <input />
                    <button>tab navigation</button>
                    <button>stays</button>
                    <button>inside</button>
                    <button>the modal</button>
                </form>
            </Modal>
        </Authenticated >
    );
}
