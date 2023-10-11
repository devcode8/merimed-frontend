import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectItems } from "../../cart/cartSlice";
import { selectLoggedInUser } from "../../auth/authSlice";
import { selectUserInfo } from "../../user/userSlice";

const navigation = [
  { name: "Shop", link: "/", user: true },
  { name: "Admin", link: "/admin", admin: true },
  { name: "Orders", link: "/admin/orders", admin: true },
];

const userNavigation = [
  { name: "My Profile", link: "/user/profile" },
  { name: "My Orders", link: "/user/orders" },
  { name: "Sign out", link: "/logout" },
];

const Navbar = ({ children }) => {
  const items = useSelector(selectItems);
  const userInfo = useSelector(selectUserInfo);
  const user = useSelector(selectLoggedInUser);

  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-blue-500">
          {({ open }) => (
            <>
              <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <Link
                        to="/"
                        className="text-2xl font-semibold text-white"
                      >
                        Merimed
                      </Link>
                    </div>
                    <div className="hidden md:block">
                      {userInfo ? (
                        <div className="ml-10 flex items-baseline space-x-4">
                          {navigation.map((item) =>
                            item[userInfo.role] ? (
                              <Link
                                key={item.name}
                                to={item.link}
                                className="
                                text-white
                                hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                              >
                                {item.name}
                              </Link>
                            ) : null
                          )}
                        </div>
                      ) : null}
                    </div>
                  </div>
                  {user ? (
                    <div className="hidden md:block">
                      <div className="ml-4 flex items-center md:ml-6">
                        <Link to="/cart">
                          <button
                            type="button"
                            className="relative rounded-full bg-blue-600 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                          >
                            <ShoppingCartIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </Link>
                        {items.length > 0 && (
                          <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 z-0">
                            {items.length}
                          </span>
                        )}

                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                          <div>
                            <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-blue-600 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                              <span className="absolute -inset-1.5" />
                              <span className="sr-only">Open user menu</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://rb.gy/q8cao"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none flex flex-col items-center">
                              {userNavigation.map((item) => (
                                <Menu.Item key={item.name}>
                                  {({ active }) => (
                                    <Link to={item.link} className="">
                                      {item.name}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </Menu>
                      </div>
                    </div>
                  ) : (
                    <div className="gap-5 text-white font-bold hidden md:flex">
                      <Link to="/login">Login</Link>
                      <Link to="/signup">Register</Link>
                    </div>
                  )}

                  <div className="-mr-2 flex md:hidden">
                    {/* Mobile menu button */}
                    <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      ) : (
                        <Bars3Icon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                </div>
              </div>
              <Disclosure.Panel className="md:hidden">
                {user && (
                  <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3 flex flex-col items-start">
                    {userInfo ? (
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) =>
                          item[userInfo.role] ? (
                            <Disclosure.Button key={item.name}>
                              <Link
                                key={item.name}
                                to={item.link}
                                className="
                                text-white
                                hover:bg-gray-700 hover:text-white
                              rounded-md px-3 py-2 text-sm font-medium"
                              >
                                {item.name}
                              </Link>
                            </Disclosure.Button>
                          ) : null
                        )}
                      </div>
                    ) : null}
                  </div>
                )}
                <div className="border-t border-gray-700 pb-3 pt-4">
                  {user && (
                    <div className="flex items-center px-5 gap-3">
                      <div className="flex-shrink-0">
                        <img
                          className="h-10 w-10 rounded-full"
                          src="https://rb.gy/q8cao"
                          alt=""
                        />
                      </div>
                      <Link to="/cart">
                        <button
                          type="button"
                          className="relative ml-auto flex-shrink-0 rounded-full bg-blue-800 p-2 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                        >
                          <ShoppingCartIcon
                            className="h-6 w-6"
                            aria-hidden="true"
                          />
                        </button>
                      </Link>
                      {items.length > 0 && (
                        <span className="inline-flex items-center rounded-md mb-7 -ml-3 bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10 z-0">
                          {items.length}
                        </span>
                      )}
                    </div>
                  )}
                  {user ? (
                    <div className="mt-3 space-y-1 px-2">
                      {userNavigation.map((item) => (
                        <Disclosure.Button
                          key={item.name}
                          as="a"
                          to={item.link}
                          className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                        >
                          <Link to={item.link}>{item.name}</Link>
                        </Disclosure.Button>
                      ))}
                    </div>
                  ) : (
                    <div className="text-white font-bold flex flex-col px-5 py-4 gap-4 md:hidden">
                      <Link to="/login">Login</Link>
                      <Link to="/signup">Register</Link>
                    </div>
                  )}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </>
  );
};

export default Navbar;
