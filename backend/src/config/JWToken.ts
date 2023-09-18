import jwt from 'jsonwebtoken';

class JWToken {
  private static secretKey = '35f0cac58b6e1026aeff408997a67370';

  public static generateToken(payload: any, expiresIn: string = '24h'): string {
    return jwt.sign(payload, this.secretKey, { expiresIn });
  }

  public static verifyToken(token: string): any | null {
    try {
      return jwt.verify(token, this.secretKey);
    } catch (error) {
      return null;
    }
  }
}

export default JWToken;
