import { Component } from 'react';
import GalleryList from './ImageGallery.styled';
import GalleyItem from '../ImageGalleryItem/ImageGalleryItem';
import getApiResult from '../../services/apiImageService';
import Button from '../Button';
import LoaderWrapper from '../Loader/Loader';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropTypes from 'prop-types';
