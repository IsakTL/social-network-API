import { Request, Response } from 'express';
import { Thought } from '../models/index.js';

/**
 * GET All thoughts
 * @returns an array of thoughts
*/
export const getAllThoughts = async (_req: Request, res: Response) => {
    try {
        const thoughts = await Thought.find();
        res.json(thoughts);
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
}

/**
 * GET thought based on id /thought/:id
 * @param string id
 * @returns a single Thought object
*/
export const getThoughtById = async (req: Request, res: Response) => {
    const { thoughtId } = req.params;
    try {
        const thought = await Thought.findById(thoughtId);
        if (thought) {
            res.json(thought);
        } else {
            res.status(404).json({
                message: 'Thought not found'
            });
        }
    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};

/**
* POST thought
* @param object thought
* @returns a single thought object
*/
export const createThought = async (req: Request, res: Response) => {
    const { thought } = req.body;
    try {
        const newThought = await Thought.create({
            thought
        });
        res.status(201).json(newThought);
    } catch (error: any) {
        res.status(400).json({
            message: error.message
        });
    }
};

/**
* DELETE thought based on id /thoughts/:id
* @param string id
* @returns string 
*/
export const deleteThought = async (req: Request, res: Response) => {
    try {
        const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });

        if (!thought) {
            res.status(404).json({
                message: `No thought found with ID ${req.params.thoughtId}.`
            });
        } else {
            res.json({ message: 'Thought deleted.' });
        }

    } catch (error: any) {
        res.status(500).json({
            message: error.message
        });
    }
};
