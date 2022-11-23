import Asset from '../models/asset';
import Wallet from '../models/wallet';
import { addInWallet } from './utils';

class AssetController {
    store = async (req: any, res: any) => {
        const { walletId } = req.params;
        const { description, price } = req.body;
        const wallet = await Wallet.findByPk(walletId);
        
        if (!wallet) return res.send("Carteira não encontrada");

        const [assets] = await Asset.findOrCreate({
            where : {description, price },
        });
        await addInWallet(wallet, assets);
    }

    getAll = async (req: any, res: any) => {
        const { walletId } = req.params;

        const wallet = await Asset.findByPk(walletId, {
            include: ["assets"],
        });
        if (!wallet) res.send("Carteira não encontrada");

        return res.json(wallet);
    }

    put = async (req: any, res: any) => {
        const { name } = req.body;
        await Wallet.update(
            { name },
            {
                where: {
                    id: req.params.id,
                },
            },
        );
        return res.send('Carteira atualizada!');
    }

    delete = async (req: any, res: any) => {
        await Wallet.destroy({
            where: {
                id: req.params.id,
            },
        });
        return res.send('Carteira removida!');
    }
};

export default new AssetController();
